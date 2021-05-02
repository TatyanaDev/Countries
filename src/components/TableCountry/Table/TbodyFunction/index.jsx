import Tbody from './Tbody/index';
import dataFilter from './DataFilter';

const TbodyFunction = ({ data, searchTerm }) => {
  return (
    <tbody>
      {data
        .filter(country => dataFilter(country, searchTerm))
        .map((country, index) => {
          return <Tbody country={country} index={index} />;
        })}
    </tbody>
  );
};

export default TbodyFunction;
