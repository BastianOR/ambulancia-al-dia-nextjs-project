import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../components/ui/select";

export default function ToolSelect({ onToolChange }) {
  return (
    <Select defaultValue="-" onValueChange={onToolChange}>
      <SelectTrigger className="w-[270px] text-lg">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="text-lg mb-1" value="-">-</SelectItem>
        <SelectItem className="text-lg mb-1" value="Silla de ruedas">Silla de ruedas</SelectItem>
        <SelectItem className="text-lg mb-1" value="Camilla">Camilla</SelectItem>
      </SelectContent>
    </Select>
  );
}
