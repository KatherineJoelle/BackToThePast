export type Props = {
  enabled: boolean
  onClick?: Actions
}

export default class Button implements IScript<Props> {
  active: Record<string, boolean> = {}
  material: BasicMaterial

  init() {
    this.material = new BasicMaterial()
    this.material.texture = new Texture('15fc8bc9-3240-460b-b767-a378b6366a5b/models/transparent.png')
    this.material.alphaTest = 1
  }

  spawn(host: Entity, props: Props, channel: IChannel) {
    const shape = new BoxShape()
    shape.withCollisions = false

    this.active[host.name] = props.enabled

    channel.handleAction('enable', () => {
      this.active[host.name] = true
    })

    channel.handleAction('disable', () => {
      this.active[host.name] = false
    })

    const ent = new Entity()
    ent.setParent(host)
    ent.addComponent(shape)
    ent.addComponent(this.material)
    ent.addComponent(new Transform({ position: new Vector3(0, 0.5, 0) }))
    ent.addComponent(
      new OnPointerDown(() => {
        if (this.active[host.name]) {
          channel.sendActions(props.onClick)
        }
      })
    )
  }
}
