import LocationIcon from '../icons/location-icon';

export default function Location({
  name,
  location,
}: {
  name: string;
  location: string;
}) {
  return (
    <p className="flex items-center text-sm text-gray-600">
      <span className="mr-1 inline">
        <LocationIcon />
      </span>{' '}
      {name} - {location}
    </p>
  );
}
