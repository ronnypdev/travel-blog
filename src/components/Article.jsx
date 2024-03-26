

export default function Article(props) {
  const {
    title,
    pin_icon,
    location,
    googleMapsText,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl
  } = props;

  return <>
    <article className="container mx-auto flex flex-row border-b-[1px] border-[color:(--color-gray)] pb-5 pt-5">
      <img className="object-cover w-32 h-44 rounded" src={imageUrl} alt="Mt. Fuji" />
      <div className="ml-5 mt-2 text-justify">
        <div className="flex flex-row items-center">
          <img className="w-2 h-3" src={pin_icon} alt="icon map" />
          <p className="ml-1 uppercase text-wrap font-normal tracking-[1.74px] text-[color:var(--color-black)]">{location}</p>
          <a className="ml-3 underline text-wrap font-normal text-[color:var(--color-gray)]" href={googleMapsUrl}>{googleMapsText}</a>
        </div>
        <h4 className="mb-4 text-h4 text-wrap font-bold text-[color:var(--color-black)]">{title}</h4>
        <div className="flex flex-row mb-2">
          <p className="text-xs text-wrap font-bold text-[color:var(--color-black)]">{startDate} - </p>
          <p className="text-xs text-wrap font-bold text-[color:var(--color-black)]">{endDate}</p>
        </div>
        <p className="text-xs text-wrap font-normal max-w-96 text-[color:var(--color-black)]">
          {description}
        </p>
      </div>
    </article>
  </>
}
