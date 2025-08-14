type TitleProps = {
  text: string;
};

 function Title({ text }: TitleProps) {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold mb-2">{text}</h1>
      <hr />
    </div>
  );
}

export default Title;