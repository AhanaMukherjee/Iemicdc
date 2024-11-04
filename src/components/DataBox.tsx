
type Props = {
    title: string
    data: string
}

export const DataBox = (props: Props) => {

    const { title, data } = props

    return (
        <div className="w-[60%] space-y-6">
        <h1 className="w-full text-center text-4xl text-purple-600 font-bold">
          {title}
        </h1>
        <p className="text-gray-500 text-xl" dangerouslySetInnerHTML={{__html: data}}>
        </p>
      </div>
    )

}