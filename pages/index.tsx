import * as React from 'react'
import { Box, Image } from 'rebass'

import Article, { meta } from '../projects/wilshire-grand.md'

export default () => (
  <Box
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100vh',
    }}
    width="100%"
    p={3}
    bg={meta.backgroundColor}
  >
    <Article
      components={{
        img: (props: any) => <img width="100%" height="auto" {...props} />,
      }}
    />
  </Box>
)
