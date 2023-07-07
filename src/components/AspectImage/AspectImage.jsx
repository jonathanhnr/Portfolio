
import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import '../../Style/AspectImage.jsx';
import { SectionAspect } from '../../Style/AspectImage.jsx';

const AspectRatioDemo = ({image}) => (
  <SectionAspect>
  <div className="Container">
    <AspectRatio.Root ratio={4/ 3}>
      <img className={"Image"} src={image} alt='image' />
    </AspectRatio.Root>
  </div>
  </SectionAspect>
);

export default AspectRatioDemo;