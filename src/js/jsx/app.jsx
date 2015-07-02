function _react() {

    var Blah = React.createClass({
        _onClick: function() {
            this.props.onClick(this.props.id);
        },

        render: function() {
            return (
                <span
                    onClick={this._onClick}
                    className={this.props.selected ? ' selected' : ''} >
                    {this.props.label}
                </span>
            )
        }
    });

    var List = React.createClass({
        getInitialState: function() {
            return {
                selected: null
            };
        },

        select: function(id) {
            this.setState({selected: id});
        },

        render: function() {
            var self = this;
            var items = this.props.data.map(function(data){
                return (
                    <div className="row" key={data.id}>
                        <div className="col-md-12 test-data">
                            <Blah
                                selected={self.state.selected === data.id}
                                onClick={self.select}
                                id={data.id}
                                label={data.label}
                            />
                        </div>
                    </div>
                );
            });
            return <div>{items}</div>;
        }
    });

    var runReact = document.getElementById("run-react");
    runReact.addEventListener("click", function() {
        var data = _buildData(),
            date = new Date();

        React.render(
            <List data={data}/>,
             document.getElementById("react")
        );
        runReact.innerHTML = (new Date() - date) + " ms";
    });
}
