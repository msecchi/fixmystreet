package FixMyStreet::Cobrand::GroundControl;
use parent 'FixMyStreet::Cobrand::Whitelabel';

# XXX This is using the UK council Whitelabel, though may not be equivalent
# to such. It is using 'Basildon' as the corresponding council.

use strict;
use warnings;

sub council_id { 2319 }
sub council_area { 'Ground Control' }
sub council_name { 'Ground Control' }
sub council_url { 'groundcontrol' }

# We want nice high-level areas, as the site can cover all of the UK.
sub area_types { [ 'EUR' ] }
sub area_types_children { [] }
# Assume this cobrand covers all areas
sub area_check { 1 }

sub example_places { ( 'CM12 0EQ', "Foys Walk, South Green" ) }

1;
