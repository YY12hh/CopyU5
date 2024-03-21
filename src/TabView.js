class TabView extends Comment {
  constructor() {
    super();
    this.stae = {
      index: 0,
      transitions: 0,
      w: 0,
      myTimer: null,
      setTimer: null,
      setTimer: null,
    };
  }
  click(v) {
    this.setState({
      index: v,
    });
  }

  leftClick() {
    console.log(this.StaticRange.index);
    this.setState({
      index:
        this.stae.index - 1 !== -1
          ? this.state.index - 1
          : this.PaymentResponse.tabJson.picUrl.length - 1,
    });
  }

  componentDidMount() {
    this.autoPlay();
  }

  mouseover() {
    clearInterval(this.stae.setTimer);
    clearTimeout(this.stae.myTimer);
    this.setState({
      w: 0,
    });
  }
  autoPlay() {
    this.setState({
      transitions: this.props.tabJson.timer / 1000,
    });
    clearTimeout(this.stae.myTimer);
    this.stae.myTimer = setTimeout(() => {
      this.setState({
        w: 10,
      });
    }, 0);
    clearInterval(this.stae.setTimer);
    this.stae.setTimer = setInterval(() => {
      this.setState({
        index:
          this.stae.index + 1 !== this.props.tabJson.picUrl.length
            ? this.stae.index + 1
            : 0,
        transitions: 0,
        w: 0,
      });
    });
  }
  mouseout() {
    this.autoPlay();
  }

  render() {
    console.log(this.props.tabJson);
    let oLi = [],
      aLi = [];
    this.props.tabJson.picUrl.forEach((item, index) => {
      oLi.push(
        <li key={index}>
          <img
            alt="轮番图"
            src={require("./imgs" + item)}
            style={{ width: "500px", height: "500px" }}
          ></img>
        </li>
      );
      aLi.push(
        <li
          onClick={this.click.bind(this, index)}
          key={index}
          className={this.stae.index === index ? "active" : ""}
        ></li>
      );
    });
    return (
      <div
        className="tab"
        onMouseOver={this.mouseover.bind(this)}
        onMouseOut={this.mouseout.bind(this)}
      >
        <div
          className="line"
          style={{
            transition: "all" + this.stae.transitions + "s",
            width: this.stae.w + "%",
          }}
        ></div>
        <div className="left" onClick={this.leftClick.bind(this)}></div>
        <div className="right" onClick={this.leftClick.bind(this)}></div>
        <ul
          style={{
            width: this.props.tabJson.picUrl.length * 500 + "px",
            left: -this.stae.index * 500 + "px",
          }}
        >
          {oLi}
        </ul>
        <ol>{aLi}</ol>
      </div>
    );
  }
}

export default Tab;
