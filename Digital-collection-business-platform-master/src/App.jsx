// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OriginalityCheck from './components/OriginalityCheck';
import { OriginalityCheckProvider } from './contexts/OriginalityCheckContext';

function App() {
  return (
    <Router>
      <Switch>
        {/* 其他路由配置 */}
        <Route path="/originality-check">
          <OriginalityCheckProvider>
            <OriginalityCheck />
          </OriginalityCheckProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
