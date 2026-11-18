import Image from "next/image";

// プロフィールデータ（ここを書き換えるだけで内容を変更できます）
const PROFILE = {
  name: "山田 太郎",
  handle: "@taro_yamada",
  role: "Web Developer / UI Designer",
  location: "Tokyo, Japan",
  avatar: "/avatar.png", // publicフォルダに置いた画像ファイル名
  bio: "東京を拠点にWebサービスの開発とデザインをしています。シンプルで使いやすいインターフェースを作ることが好きです。週末はコーヒーを淹れたり、カメラを持って散歩したりしています。",
  now: [
    "Next.js を使った個人開発プロジェクト",
    "UIデザインの基礎とタイポグラフィの勉強",
    "近所のロースタリー巡り",
  ],
  links: [
    { label: "X (Twitter)", url: "https://x.com/" },
    { label: "GitHub", url: "https://github.com/" },
    { label: "note", url: "https://note.com/" },
    { label: "Contact", url: "mailto:hello@example.com" },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors">
      <div className="max-w-lg mx-auto px-6 py-20 sm:py-28">
        
        {/* 1. Header / Profile */}
        <header className="flex flex-col items-start mb-12">
          {/* 画像を用意するまでは、下のdivが仮のアイコンとして表示されます */}
          <div className="w-20 h-20 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-800 mb-6 flex items-center justify-center text-2xl font-medium text-neutral-500">
            {/* 画像を配置したら、下のコメントアウトを外して使ってください */}
            {/* <Image
              src={PROFILE.avatar}
              alt={PROFILE.name}
              width={80}
              height={80}
              className="object-cover w-full h-full"
              priority
            /> */}
            <span>{PROFILE.name.slice(0, 1)}</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight">
            {PROFILE.name}
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            {PROFILE.role} · {PROFILE.location}
          </p>
        </header>

        {/* 2. Bio（自己紹介） */}
        <section className="mb-12">
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-[15px]">
            {PROFILE.bio}
          </p>
        </section>

        {/* 3. Links（SNS・連絡先ボタン） */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
            Links
          </h2>
          <div className="flex flex-col gap-2.5">
            {PROFILE.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all text-sm font-medium"
              >
                <span>{link.label}</span>
                <span className="text-neutral-400 group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* 4. Now（今やっていること） */}
        <section className="mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
            Now
          </h2>
          <ul className="space-y-2.5 text-sm text-neutral-700 dark:text-neutral-300">
            {PROFILE.now.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="text-neutral-400 select-none">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-400 dark:text-neutral-500">
          © 2026 {PROFILE.name}
        </footer>

      </div>
    </main>
  );
}