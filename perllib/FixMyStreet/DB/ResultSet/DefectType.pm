package FixMyStreet::DB::ResultSet::DefectType;
use base 'DBIx::Class::ResultSet';

use strict;
use warnings;
use Moo;
use HTML::Entities;

with('FixMyStreet::Roles::ContactExtra');

sub join_table {
    return 'contact_defect_types';
}

sub map_extras {
    my ($rs, @ts) = @_;
    my %meta;
    my $meta;
    my %extra;
    my @keys;
    return map {
        $meta = $_->get_extra_metadata();
        @keys = keys %$meta;
        %extra = map { $_ => encode_entities($meta->{$_}) } @keys;
        {
            id => $_->id,
            name => encode_entities($_->name),
            extra => \%extra
        }
    } @ts;
}

1;
