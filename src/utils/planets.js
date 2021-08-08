
import MARS_THUMBNAIL from "../assets/thumbnail images/mars_thumbnail.jpg";
import MERCURY_THUMBNAIL from "../assets/thumbnail images/mercury_thumbnail.jpg";
import VENUS_THUMBNAIL from "../assets/thumbnail images/venus_thumbnail.jpg";
import EARTH_THUMBNAIL from "../assets/thumbnail images/earth_thumbnail.jpg";

import MARS_TEXTURE from "../assets/textures/8k_mars.jpg";
import MERCURY_TEXTURE from "../assets/textures/8k_mercury.jpg";
import VENUS_TEXTURE from "../assets/textures/8k_venus_surface.jpg";
import EARTH_TEXTURE from "../assets/textures/8k_earth_daymap.jpg"


export const PLANETS = {
    venus: {
        key: "planet1",
        name: "venus",
        thumbnail: VENUS_THUMBNAIL,
        texture: VENUS_TEXTURE,
        features: {
            clouds: {
                show: false,
                opacity: 0.3,
                transparent: true
            },
            stars: {
                show: true,
                factor: 7,
                saturation: 0,
                blink: true,
                count: 20000
            },
            enableBaseLayer: false,
            autoRotate: true,
            zoom: {
                enabled: true,
                speed: 0.6
            } ,
            pan: {
                enabled: true,
                speed: 0.5
            },
            rotate: {
                enabled: true,
                speed: 0.4
            }
        }
    },
    mars: {
        key: "planet2",
        name: "mars",
        thumbnail: MARS_THUMBNAIL,
        texture: MARS_TEXTURE,
        features: {
            clouds: {
                show: false,
                opacity: 0.3,
                transparent: true,
                
            },
            stars: {
                show: true,
                factor: 7,
                saturation: 0,
                blink: true,
                count: 20000
            },
            enableBaseLayer : false,
            autoRotate: true,
            zoom: {
                enabled: true,
                speed: 0.6
            } ,
            pan: {
                enabled: true,
                speed: 0.5
            },
            rotate: {
                enabled: true,
                speed: 0.4
            }
        }
    },
    mercury: {
        key: "planet3",
        name: "mercury",
        thumbnail: MERCURY_THUMBNAIL,
        texture: MERCURY_TEXTURE,
        features: {
            clouds: {
                show: false,
                opacity: 0.3,
                transparent: true,
                
            },
            stars: {
                show: true,
                factor: 7,
                saturation: 0,
                blink: true,
                count: 20000
            },
            enableBaseLayer: false,
            autoRotate: true,
            zoom: {
                enabled: true,
                speed: 0.6
            } ,
            pan: {
                enabled: true,
                speed: 0.5
            },
            rotate: {
                enabled: true,
                speed: 0.4
            }
        }
    },
    earth: {
        key: "planet4",
        name: "earth",
        thumbnail: EARTH_THUMBNAIL,
        texture: EARTH_TEXTURE,
        features: {
            clouds: {
                show: true,
                opacity: 0.3,
                transparent: true,
                
            },
            stars: {
                show: true,
                factor: 7,
                saturation: 0,
                blink: false,
                count: 20000
            },
            enableBaseLayer : true,
            autoRotate: true,
            zoom: {
                enabled: true,
                speed: 0.6
            } ,
            pan: {
                enabled: true,
                speed: 0.5
            },
            rotate: {
                enabled: true,
                speed: 0.4
            }
        }
    }
}