import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MonthSelect({ defaultMonth, onMonthChange }) {
  return (
    <Select defaultValue={defaultMonth} onValueChange={onMonthChange}>
      <SelectTrigger className="w-[140px] text-lg">
        <SelectValue placeholder="Día" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="text-lg mb-1" value="enero">enero</SelectItem>
        <SelectItem className="text-lg mb-1" value="febrero">febrero</SelectItem>
        <SelectItem className="text-lg mb-1" value="marzo">marzo</SelectItem>
        <SelectItem className="text-lg mb-1" value="abril">abril</SelectItem>
        <SelectItem className="text-lg mb-1" value="mayo">mayo</SelectItem>
        <SelectItem className="text-lg mb-1" value="junio">junio</SelectItem>
        <SelectItem className="text-lg mb-1" value="julio">julio</SelectItem>
        <SelectItem className="text-lg mb-1" value="agosto">agosto</SelectItem>
        <SelectItem className="text-lg mb-1" value="septiembre">septiembre</SelectItem>
        <SelectItem className="text-lg mb-1" value="octubre">octubre</SelectItem>
        <SelectItem className="text-lg mb-1" value="noviembre">noviembre</SelectItem>
        <SelectItem className="text-lg mb-1" value="diciembre">diciembre</SelectItem>
      </SelectContent>
    </Select>
  );
}
