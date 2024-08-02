import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const daysloop = [];

for (let counter = 1; counter < 32; counter++) {
  daysloop[counter - 1] = counter;
}

export default function DaySelect({ defaultDay, onDayChange }) {

    const renderedDays = daysloop.map((day, index) => (
        <SelectItem key={index} className="text-lg mb-1" value={"" + day}>{day}</SelectItem>
    ));

  return (
    <Select defaultValue={defaultDay} onValueChange={onDayChange}>
      <SelectTrigger className="w-[90px] text-lg">
        <SelectValue placeholder="Día" />
      </SelectTrigger>
      <SelectContent>
        {renderedDays}
      </SelectContent>
    </Select>
  );
}
