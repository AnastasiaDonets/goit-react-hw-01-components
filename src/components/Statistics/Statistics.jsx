import PropTypes from 'prop-types';
import {
  StatisticBox,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  Label,
  Percentage,
} from '../Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticBox>
      <StatisticTitle>{title}</StatisticTitle>

      <StatisticList>
        {stats.map(stat => (
          <StatisticItem key={stat.id} label={stat.label}>
            <Label>
              {stat.label} <br></br>
            </Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatisticItem>
        ))}
      </StatisticList>
    </StatisticBox>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
