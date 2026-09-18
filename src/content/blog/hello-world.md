---
title: "What the studio is working on"
date: "2025-01-01"
description: "Motion generation on serverless GPUs, Metal rendering on iOS, and why the compute tier should never share a box with the web app."
---

## Where the work is right now

The bulk of studio time goes into **NPCMotion** — turning text and video into animations that drop straight onto Roblox's R15 rig. The interesting part isn't the model, it's everything around it: request intake, GPU inference, retargeting, and getting rig-ready output back to the browser.

Alongside that: **DICOM Viewer Pro**, an iOS medical imaging viewer with a custom Metal pipeline underneath, and **ConvertPoly**, which parses and converts 3D models between OBJ, FBX, glTF and STL entirely in the browser.

## Don't put the GPU next to the web server

The lesson that keeps repeating: ML compute and the web tier want completely different scaling curves. A marketing page gets a traffic spike and needs more of almost nothing. A motion model gets one request and needs an accelerator for thirty seconds.

Put them on the same machine and you pay for idle GPUs to serve HTML. NPCMotion runs inference as serverless GPU workloads on Modal, with a Phoenix/Elixir backend brokering requests between the web app and those workers. GPU capacity tracks generation demand, and nothing else.

Elixir is doing real work there. A generation request is mostly *waiting* — the BEAM is unusually good at holding thousands of things that are waiting.

## What's next

A procedural motion solver, to extend generation past humanoid rigs. Non-humanoid targets can't just be retargeted from a humanoid skeleton; the joint topology isn't there to map onto.

More when it works.
