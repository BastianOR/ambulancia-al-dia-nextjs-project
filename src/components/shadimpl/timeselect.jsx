import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../components/ui/select";

export default function TimeSelect({ onHourChange }) {
  return (
    <Select defaultValue="06:00" onValueChange={onHourChange}>
      <SelectTrigger className="w-[270px] text-lg">
        <SelectValue placeholder="06:00" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="text-lg mb-1" value="06:00">06:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="07:00">07:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="08:00">08:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="09:00">09:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="10:00">10:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="11:00">11:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="12:00">12:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="13:00">13:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="14:00">14:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="15:00">15:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="16:00">06:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="17:00">17:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="18:00">18:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="19:00">19:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="20:00">20:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="21:00">21:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="22:00">22:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="23:00">23:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="00:00">00:00</SelectItem>
        <SelectItem className="text-lg mb-1" value="01:00">01:00</SelectItem>
      </SelectContent>
    </Select>
  );
}
