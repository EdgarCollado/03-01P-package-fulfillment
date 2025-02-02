import './App.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Footer from './components/Footer';
import PackageForm from './components/PackageForm';
import PackageList from './components/PackageList';

function App() {
  const [packages, setPackages] = useState([
    {
      id: uuidv4(),
      name: "Package from Purple Panda",
      description: "One order of our speciality product and our flagship Purple Panda pair of socks.",
      category: "Web order",
      price: "$" + 57.38
    }
  ]);

  const addPackage = (newPackageData) => {
    const newPackage = {
      id: uuidv4(), ...newPackageData
    }
    setPackages([...packages, newPackage]);
  };

  const updatePackage = (id, updatePackage) => {
    setPackages(packages.map(pkg => pkg.id === id ? {...pkg, ...updatePackage } : pkg));
  };

  const deletePackage = (id) => {
    setPackages(packages.filter(pkg => pkg.id !== id ));
  };


  return (
    <div className="container">
      <Header />
      <PackageForm addPackage={addPackage}/>
      <PackageList packages={packages} 
      updatePackage={updatePackage} 
      deletePackage={deletePackage}/>
      <Footer />
    </div>
  );
}

export default App;
