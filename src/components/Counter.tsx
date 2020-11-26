import { h, Component } from "preact";

export interface State {
  count: number
}

export class Counter extends Component<{}, State> {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  incrementCounter = (e: Event) => {
    this.setState( { count: this.state.count + 1 })
  }

  render() {
    return <div class="flex flex-row">
      <div class="flex-grow"/>
      <button
        onClick={this.incrementCounter}
        class="py-2 px-4 bg-blue-400 hover:bg-red-700 justify-center rounded-lg shadow-md
          flex-none">
        Increment Counter
      </button>
      <div class="flex-grow"/>
      <div class="py-2 pl-4
        flex-none">
        {this.state.count}
      </div>
      <div class="flex-grow"/>
    </div>
  }

}
