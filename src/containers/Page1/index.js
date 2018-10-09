import { connect } from 'react-redux';

import Page1Component from "../../components/Page1";

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
}
const Page1Container = connect(mapStateToProps, mapDispatchToProps)(Page1Component);
export default Page1Container;