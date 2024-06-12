import IconCloud from '@/components/IconCloud'

const slugs = [
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'nextdotjs',
  'firebase',
  'git',
  'github',
  'visualstudiocode',
  'tailwindcss',
  'redux',
  'vite',
  ''
]

export default function CloudOfIcons () {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-xl bg-background pb-6">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}
