"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import cn from 'clsx';

const Slider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        className={cn(
            "relative flex touch-none select-none items-center cursor-pointer group",
            className
        )}
        {...props}
    >
        <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-slate-700">
            <SliderPrimitive.Range className="absolute h-full bg-white group-hover:bg-green-500" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="hidden group-hover:block h-3 w-3 rounded-full border border-primary/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
