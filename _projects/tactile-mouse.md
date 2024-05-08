---
layout: project
title: The Tactile Mouse
description: a project with no image
img: /assets/img/projects/tactile-mouse/three-blind-mice.jpeg
importance: 4
category: Previous
related_publications: true
collabarators: ["Emeritus Professor Bob Spence, Imperial College London", "Dr Mark Witkowski, Imperial College London", "Dr James Mardell, Imperial College London"]
---


For my final MEng research project, which has branched into a number of further research projects that I continue to pursue, I developed a mobile, fingertip tactile display. This made advances over existing technolgies in its portability and ability to offer a more nuanced sensation than the simple raised-flat effect used in such displays up to this point. The finald device was equipped with a camera with a view to being able to scan printed text and graphics and convert them into tactile media.

## Research Aims

- To develop a novel, handheld tactile display with a better tactile resolution than existing electronic Braille displays.

- To investigate the effectiveness of a fingertip tactile display for comsuming 'larger-than-fingertip' media.

- To investigate tactile representations of shape and colour.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/tactile-mouse/stepper.jpeg" title="The miniature stepper motor used in the Tactile Mouse" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/tactile-mouse/drive-module.jpeg" title="8 stepper motors combined into a single row drive module" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/tactile-mouse/all-motors.jpeg" title="64 stepper motors assembled to drive an 8x8 taxel tactile display" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## A Novel Tactile Display

In order to meet the cost, size and performance requirements of the project, it was necessary to consider mechatronic designs beyond those used in traditional tactile displays. The design selected is based on an array of miniature stepper motors of the type used to adjust the lenses in digital cameras. These are fitted with leadscrews which connect to the tactile pins via rigid mechanical linkages. The stepper motors provide good accuracy and control without a large and complex sensing system for providing feedback. They are also small enough to create a usable x-y resolution (8x8 'taxels', or tactile pixels) that can still be held in one hand. The leadscrew design has the benefit of being unidirectional, meaning that forces from the motor can extend the taxel, but forces on the taxel will not turn the motor. This means that the motors can be completely powered down when not in use, improving power efficiency.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/tactile-mouse/disassembled-label.jpg" title="The Tactile Mouse" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/tactile-mouse/pattern-1.jpeg" title="A tactile pattern" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/tactile-mouse/pattern-2.jpeg" title="The same tactile pattern, translated downward as the mouse moves" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Tactile Scanning Behaviour

The combination of the bottom mounted camera and fingertip sized display presents an interesting tactile search use case for the device. This is because very few useful graphics can be fully represented on such a small display, meaning that the user will need to 'scan' their source material in order to obtain a complete view of the material. At first glance, this may appear to be a substantial deficiency in the concept, however it is important to remember that only a fingertip sized area actually recieves tactile information, and so the psychological apparatus for storing and combining these small sections of tactile stimuli is well established for most Braille readers and users of static tactile graphics.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/tactile-mouse/mobo-camera.jpeg" title="The custom motherboard with a camera fitted" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/tactile-mouse/display.jpg" title="The tactile display module" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/tactile-mouse/touchpad.jpeg" title="The touch surface on the completed Tactile Mouse" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
