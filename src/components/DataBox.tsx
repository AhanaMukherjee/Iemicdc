
type Props = {
    title: string
    data: string
}

export const DataBox = (props: Props) => {

    const { title, data } = props

    return (
        <div className="w-[60%] space-y-6">
        <h1 className="w-full text-center text-4xl text-primary font-bold">
          {title}
        </h1>
        <p className="text-gray-600 text-lg" dangerouslySetInnerHTML={{__html: data}}>
        </p>
      </div>
    )

}