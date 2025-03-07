export default function _isIterable(
  value: unknown,
): value is Iterable<unknown> {
  return (
    typeof value === 'object' && value !== null && Symbol.iterator in value
  );
}
