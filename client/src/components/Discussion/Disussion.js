const posts = [
  {
    id: 1,
    title: 'Definitions',
    href: '#',
    description:
      'Discussion of uploaded Defintions document in Immunohematology ',
    date: 'Dec 14, 2023',
    datetime: '2023-12-14',
    category: { title: 'Immunohematology', href: '#' },
    author: {
      name: 'Janet Doe',
      role: 'Stony Brook MLS Student',
      href: '#',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/e/ec/Stony_Brook_Athletics_Primary_Logo.png',
    
    },
  },
  // Second Post
  {
    id: 2,
    title: 'Chapter 1 Class Notes',
    href: '#',
    description:
      'Discussion of uploaded Chapter 1 Immunology notes on Types of Immunity',
    date: 'Jan 16, 2024',
    datetime: '2024-01-16',
    category: { title: 'Immunology', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'CUNY Hunter MLS Student',
      href: '#',
      imageUrl:
        'https://www.h-net.org/jobs/logo_view.php?id=65035',
    
    },
  },
  // More posts...
]


export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discuss how you feel about resources uploaded to our site!
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}