import TbodyItem from "./TbodyItem/index";

export default function Tbody({ data, searchTerm }) {
  const dataFilter = (country, searchTerm) =>
    country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0;

  return (
    <tbody>
      {data
        .filter((country) => dataFilter(country, searchTerm))
        .map((country, index) => (
          <TbodyItem country={country} key={index} />
        ))}
    </tbody>
  );
}
