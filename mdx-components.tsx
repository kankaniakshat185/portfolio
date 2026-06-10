import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure className="mx-auto flex flex-col items-center justify-center">
          <img src={src} alt={alt} className="mx-auto rounded-xl" />
          {caption && <figcaption className="text-center mt-2">{caption}</figcaption>}
        </figure>
      )
    },
    img: ({ src, alt, ...props }: ComponentPropsWithoutRef<'img'>) => {
      return <img src={src} alt={alt} className="mx-auto rounded-xl" {...props} />
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
  }
}
