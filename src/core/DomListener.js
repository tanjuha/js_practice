export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error(`Not $root provider for DomListener`);
    }
    this.$root = $root;
  }
}
