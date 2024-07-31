---
layout: project
title: Soft Haptics
description: Softness changing haptic interfaces
img: assets/img/projects/soft-haptics/20220517_140655-removebg-preview.png
importance: 1
category: Current
related_publications: true
collabarators: ["Prof. Fernando Bello, Imperial College London", "Dr. Lynette Jones, MIT", "Prof. Amy Kyungwon Han, Seoul National University", "Dr. Ildar Farkhatdinov, University of London"]
funding: ["EPSRC via a PhD studentship and the National Centre for Nuclear Robotics funded project", "UKRI and Mitacs via the Globalink UK-Canada Doctoral Exchange Programme", "QMUL via an Impact Acceleration Grant", "RS Components via the Grassroots Student Project Fund", "Imperial College and MIT via a Global Seed Fund award", "IEEE via an Innovation in Haptics Award"]
---

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/2DWNzQPqhn8?si=PK0XxpJ3dAQfHKkP" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

A key part of my PhD research involved the development of a novel softness-changing, vibrotactile interface. This project, which has expanded rapidly in the last few years, uses the principle of particle jamming to affect the softness of a tactile display, as well as serving as a basis for creating multimodal haptic devices which incorporate other sensations such as vibration, shape and temperature.

## Research Aims
- To investigate how softness change can be used in a variety of haptic interactions
- To particle jamming as a foundation for low-cost, highly portable soft haptic devices
- To investigate the combination of softness and other tactile sensations
- To investigate the physical propagation of temperature and vibration through a granular fluids of controllable stiffness

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/SE1JTNXGXzQ?si=EXmekY_sw9QZqRZ2" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/soft-haptics/Explosion-labelled-page-001.jpg" title="The BlueROV2" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

## Particle Jamming
Particle jamming is an emergent technology in soft robotics where the particles that make up a granular fluid are compacted such that each particle is braced against its adjacent particles. Jammed fluids are, by definition, stiffer and harder than the same material in an unjammed state, and this leads to many changes in their properties, such as increased viscosity and stiffness. Whilst particle jamming is usually achieved using a vacuum, my work in this area has produced several mechanial techniques for jamming particles {% cite Brown2024_nonpneumatic_jamming%}. These reduce the cost, size, weight and complexity of producing soft haptic devices using particle jamming.

## Adding Vibration
By adding other hardware to the jamming fluid, it is possible to create other haptic sensations. For example, during my PhD research I embedded a vibrating motor inside the jamming material. This had no effect on the hardness change but the particles were able to transfer vibrations to the container, and therefore a user's hand.

A prototype for a haptic device based on the vibrating and hardness changing effect described above was built and consisted of a rigid case filled with small particles, covered by a silicone touch pad. This mechanical device can be connected to an electronic vacuum regulator to control the strength of the jamming effect. This device uses a simple vacuum pump to generate an area of low pressure inside the case, forcing the soft cover into the device and causing the particles to jam. An ERM type vibrating motor is loosly suspended in the fluid to provide vibrations which are then restricted by the jamming of the particles {% cite Brown2020_Soft_Haptic_Interface_Based_On_Vibration %}.


## Interactive Devices

Interactive devices were also built based on this technologies. The first was a touchpad which used force sensors (load cells) to detect the position of and force applied by a user's finger, whilst changing its hardness and vibrating {% cite Brown2021WHCTouchpad %}. The second was a joystick, in which the soft silicone handle was filled with particles, and sealed with an airtight plastic base {% cite Brown2021WHCJoystick %}.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/H3LhDnDUb5M?si=6QeTcFEkqR8yq4A6" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/XemWPxxm76A?si=ZY-hmtYw1Wca_lRi" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


## Expanding Multimodality

My long-term research ambition is to combine other haptic modalities into a tactile display, using particle jamming as a foundation but adding other hardware to produce other effects. This work is ongoing and will be published and shared here when more progress has been made.


