import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@utils/tailwindMerge";

type TextProps = React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof textVariants>;

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(textVariants({ variant }), className)}
      {...props}
    />
  )
);
Text.displayName = "Text";

export default Text;

const textVariants = cva("font-sans", {
  variants: {
    variant: {
      hero: "text-6xl font-bold",
      title: "text-4xl font-semibold",
      subtitle: "text-2xl",
      body: "text-lg",
      highlight: "text-lg font-semibold",
      caption: "text-sm text-gray-500",
    },
  },
});
