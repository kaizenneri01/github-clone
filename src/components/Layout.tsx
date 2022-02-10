import React from 'react';
import Particles from 'react-tsparticles';

const Layout = ({ children }: any) => {
    return (
        <div>
            <Particles
                options={{
                    fullScreen: {
                        enable: true,
                        zIndex: 0
                    },
                    particles: {
                        number: {
                            value: 70,
                            limit: 100,
                            density: {
                                enable: true,
                                value_area: 50
                            }
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 20
                            },
                            polygon: {
                                nb_sides: 1
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.5,
                                sync: true
                            }
                        },
                        size: {
                            value: 10,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 10,
                                size_min: 10,
                                sync: false
                            }
                        },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: 'none',
                            random: false,
                            straight: false,
                            out_mode: 'out',
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    backgroundMask: {
                        enable: true,
                        cover: {
                            color: {
                                value: {
                                    r: 43,
                                    g: 39,
                                    b: 30
                                }
                            },
                            opacity: 0.9
                        }
                    },
                    retina_detect: true,
                    fps_limit: 60
                }}
            />
            <div>{children}</div>
        </div>
    );
};

export default Layout;
