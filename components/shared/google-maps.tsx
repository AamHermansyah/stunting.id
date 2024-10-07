type PropTypes = {
  source: string;
}

function GoogleMaps({ source }: PropTypes) {
  return (
    <iframe
      src={source}
      className="w-full aspect-square md:aspect-video"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}

export default GoogleMaps