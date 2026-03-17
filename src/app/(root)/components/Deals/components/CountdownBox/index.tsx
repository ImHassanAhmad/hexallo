type CountdownBoxProps = {
  value: string;
  label: string;
};

export default function CountdownBox({ value, label }: CountdownBoxProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="h-[70px] w-[70px] rounded-[10px] bg-white shadow-[0px_4px_14px_1px_#00000029] flex items-center justify-center">
        <span className="text-[24px] font-extrabold text-[#484848]">
          {value}
        </span>
      </div>
      <span className="text-[12px] font-normal text-[#484848]">{label}</span>
    </div>
  );
}
