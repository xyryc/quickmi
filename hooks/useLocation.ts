import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
                                                                                                         
  export const useLocation = () => {                                                                     
    const [location, setLocation] = useState<Location.LocationObject | null>(null);                      
    const [address, setAddress] = useState<string | null>(null);                                         
    const [errorMsg, setErrorMsg] = useState<string | null>(null);                                       
    const [loading, setLoading] = useState(true);                                                        
                                                                                                         
    useEffect(() => {                                                                                    
      getCurrentLocation();                                                                              
    }, []);                                                                                              
                                                                                                         
    const getCurrentLocation = async () => {                                                             
      try {                                                                                              
        setLoading(true);                                                                                
                                                                                                         
        // Request permission                                                                            
        const { status } = await Location.requestForegroundPermissionsAsync();                           
        if (status !== 'granted') {                                                                      
          setErrorMsg('Permission to access location was denied');                                       
          setLoading(false);                                                                             
          return;                                                                                        
        }                                                                                                
                                                                                                         
        // Get current location                                                                          
        const currentLocation = await Location.getCurrentPositionAsync({                                 
          accuracy: Location.Accuracy.Balanced,                                                          
        });                                                                                              
        setLocation(currentLocation);                                                                    
                                                                                                         
        // Reverse geocode to get address                                                                
        const [addressResult] = await Location.reverseGeocodeAsync({                                     
          latitude: currentLocation.coords.latitude,                                                     
          longitude: currentLocation.coords.longitude,                                                   
        });                                                                                              
                                                                                                         
        if (addressResult) {                                                                             
          const formattedAddress = `${addressResult.city || ''}, ${addressResult.region || ''}`;         
          setAddress(formattedAddress.trim());                                                           
        }                                                                                                
      } catch (error) {                                                                                  
        setErrorMsg('Error getting location');                                                           
        console.error(error);                                                                            
      } finally {                                                                                        
        setLoading(false);                                                                               
      }                                                                                                  
    };                                                                                                   
                                                                                                         
    return { location, address, errorMsg, loading, refetch: getCurrentLocation };                        
  };                                                                                                     
      