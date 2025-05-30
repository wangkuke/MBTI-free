import Link from "next/link"

interface TypeCardProps {
  type: string
  data: {
    name: string
    nickname: string
    description: string
  }
}

export function TypeCard({ type, data }: TypeCardProps) {
  return (
    <Link href={`/types/${type.toLowerCase()}`}>
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-600 mb-2">{type}</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{data.name}</h3>
          <p className="text-purple-600 font-medium mb-4">"{data.nickname}"</p>
          <p className="text-gray-600 text-sm leading-relaxed">{data.description}</p>
        </div>
      </div>
    </Link>
  )
}
