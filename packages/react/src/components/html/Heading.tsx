import React, { useContext } from 'react';
import { FormRenderContext } from '../FormRenderContext';

type HeadingProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
> & {
    level: number | string
};

// todo: we are decreasing the levels in the render, should we? or should we use the same level?
export function Heading({ level, ...props }: HeadingProps) {  
    const { headingLevel } = useContext(FormRenderContext);
    let newLevel = Number(level);
    newLevel = Number.isNaN(newLevel) ? 1 : newLevel;
    newLevel = newLevel + headingLevel - 1;

    const HeadingEl = `h${newLevel}`;
    return <HeadingEl {...props}></HeadingEl>
}
