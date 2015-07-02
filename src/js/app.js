'use strict';

function _react() {

    var Blah = React.createClass({
        displayName: 'Blah',

        _onClick: function _onClick() {
            this.props.onClick(this.props.id);
        },

        render: function render() {
            return React.createElement(
                'span',
                {
                    onClick: this._onClick,
                    className: this.props.selected ? ' selected' : '' },
                this.props.label
            );
        }
    });

    var List = React.createClass({
        displayName: 'List',

        getInitialState: function getInitialState() {
            return {
                selected: null
            };
        },

        select: function select(id) {
            this.setState({ selected: id });
        },

        render: function render() {
            var self = this;
            var items = this.props.data.map(function (data) {
                return React.createElement(
                    'div',
                    { className: 'row', key: data.id },
                    React.createElement(
                        'div',
                        { className: 'col-md-12 test-data' },
                        React.createElement(Blah, {
                            selected: self.state.selected === data.id,
                            onClick: self.select,
                            id: data.id,
                            label: data.label
                        })
                    )
                );
            });
            return React.createElement(
                'div',
                null,
                items
            );
        }
    });

    var runReact = document.getElementById('run-react');
    runReact.addEventListener('click', function () {
        var data = _buildData(),
            date = new Date();

        React.render(React.createElement(List, { data: data }), document.getElementById('react'));
        runReact.innerHTML = new Date() - date + ' ms';
    });
}