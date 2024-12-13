import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-zinc-800">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
  <div>
    <Link href="/" className="flex items-center gap-2">
      <span className="text-amber-500 text-2xl">🔥</span>
      <span className="font-semibold text-xl text-white">Whomever</span>
    </Link>
  </div>
  <div>
    <h3 className="font-semibold mb-4 text-white">Navigation</h3>
    <div className="space-y-2">
      <Link href="#about" className="block text-zinc-400 hover:text-white">About</Link>
      <Link href="#expertise" className="block text-zinc-400 hover:text-white">Expertise</Link>
      <Link href="#projects" className="block text-zinc-400 hover:text-white">Projects</Link>
      <Link href="#team" className="block text-zinc-400 hover:text-white">Team</Link>
      <Link href="#roadmap" className="block text-zinc-400 hover:text-white">Roadmap</Link>
    </div>
  </div>
  <div>
    <h3 className="font-semibold mb-4 text-white">Connect</h3>
    <div className="space-y-2">
      <Link href="https://t.me/ctrltg" className="block text-zinc-400 hover:text-white">Telegram</Link>
      <Link href="https://discord.gg/sw6c7REZd6" className="block text-zinc-400 hover:text-white" target="_blank" rel="noopener noreferrer">Discord</Link>
      <Link href="#" className="block text-zinc-400 hover:text-white">LinkedIn</Link>
      <Link href="https://github.com/Wh0mever" className="block text-zinc-400 hover:text-white" target="_blank" rel="noopener noreferrer">GitHub</Link>
    </div>
  </div>
  <div>
    <h3 className="font-semibold mb-4 text-white">Certifications</h3>
    <div className="space-y-2">
      <span className="block text-zinc-400">Microsoft</span>
      <span className="block text-zinc-400">Google</span>
      <span className="block text-zinc-400">IBM</span>
    </div>
  </div>
</div>
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-400">© Whomever, 2024</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-zinc-400 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-zinc-400 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

