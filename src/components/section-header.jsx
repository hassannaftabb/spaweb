import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Heading
        as="h1"
        sx={{
          variant: 'sectionHeader.title',
          color: isWhite ? 'white' : 'heading',
        }}
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        {title}
      </Heading>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subtitle',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
          textAlign: 'center',
        }}
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        {slogan}
      </Text>
    </Box>
  );
}
