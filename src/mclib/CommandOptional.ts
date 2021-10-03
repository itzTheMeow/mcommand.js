export default function CommandOptional(item: any) {
  return item || item == 0 ? [item] : [];
}
