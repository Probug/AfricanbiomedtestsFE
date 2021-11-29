import React from "react";

import routes from "./routes";
import 'react-perfect-scrollbar/dist/css/styles.css';
import './mixins/chartjs';
import theme from './theme';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GlobalStyles from './components/GlobalStyles';
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';

// Import Bootstrap Scss
import "./theme.scss";

// Import Material Ico
import "./assets/css/materialdesignicons.min.css";

// Import Bootstrap Css
import "./assets/css/mobiriseicons.css";

// Import Custom Css
import "./assets/css/menu.css";
import "./assets/css/style.css";

//Colors
import "./assets/css/colors/default.css";

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
      <ToastContainer position="top-right"/>
    </ThemeProvider>
  );
};

export default App;
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <Router>
//           <Switch>
//             {routes.map((route, idx) => (
//               <Route path={route.path} component={route.component} key={idx} />
//             ))}
//           </Switch>
//         </Router>
//       </React.Fragment>
//     );
//   }
// }

// export default withRouter(App);
