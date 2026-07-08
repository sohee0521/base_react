export default function ErrorMessage(props) {
  const { message } = props;
  return <span className="text-red-600 text-sm">{message}</span>;
}
