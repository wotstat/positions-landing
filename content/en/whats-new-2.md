---
title: Major Update 2.0
description: Update for Positions Mod 2.0 – firing positions, heatmaps, new position detection algorithm, and more.
---

# Major Update <SvgoV2Badge class="v2-badge" />

<br/>

Positions Mod 2.0 is now even more useful and functional. This update introduces numerous features and improvements to enhance your effectiveness. No additional cost is required; the license price remains unchanged.

## Firing Positions
The main innovation is **Firing Positions** ![img](/content/wn2/spotPoint.png){.spot-point-icon} – evenly distributed points across the map ideal for engaging enemies effectively.

For instance, if your flank is failing, strategically retreat to further firing positions, similarly when attacking.

- Primary firing positions – displayed as orange dots on the minimap.
- Secondary firing positions – displayed as **small** orange dots when hovering your cursor over the minimap.

<br/>

::div{.multi}
![img](/content/wn2/spotPointsMain.png){style="max-height: 400px"}
![img](/content/wn2/spotPointsCursor.png){style="max-height: 400px"}
::

> You can customize firing positions visibility in mod settings.

### Firing Directions

Each firing position can have up to five firing directions, indicating statistically frequent shooting directions. **This data is statistical – live battle situations and specific firing lines are not considered.**

Firing directions are shown as lines on the minimap from the nearest firing position to your tank and from the firing position closest to your cursor. Move the cursor across the minimap to view available shooting directions from underlying positions.

<br/>

::div{.center}
![img](/content/wn2/spotDirections.png){style="max-height: 550px"}
::

### Direction Markers
Pressing `alt` displays markers for firing directions from the nearest firing position within 30 meters of your tank, helping you quickly orient and pre-aim.

<br/>

::div{.center}
![img](/content/wn2/eyeMarkers.png){style="max-height: 550px"}
::

> Dashed lines are visual guides for screenshots only and do not appear in-game.

> Adjust marker visibility settings. It is recommended not to choose `always show` to avoid distractions.

## New Heatmaps

New heatmaps replace effectiveness zones, helping you assess areas rather than single positions. Unlike previous effectiveness areas, new heatmaps avoid performance drops even on weaker computers.

<br/>

::div{.center}
![img](/content/wn2/areaChanges.png){style="max-height: 400px"}
::

- ![img](/content/wn2/heatmapE.png){.heatmap-icon} **Effective positions** heatmap displayed in yellow.
- ![img](/content/wn2/heatmapP.png){.heatmap-icon} **Popular positions** heatmap displayed in blue.

> In large-scale modes like `Frontline`, weak computers may experience FPS drops when heatmaps appear. Lower `point limit` in heatmap settings if needed. Standard battles should have no issues.

> Customize heatmap visibility. You can disable popular position heatmaps or activate them via `alt` key.

## New Position Detection Algorithm

The previous algorithm worked well overall but had drawbacks addressed in the new version:
- New algorithm performs **better** on **less popular tanks and new maps**.
- New data is now loaded into the dataset **automatically every day**.
- Initial position selection uses data from **the last month only**, quickly adapting to shifting meta for popular tanks.

<br/>

Comparison of old vs. new algorithm:
- Green markers – new algorithm
- Blue markers – old algorithm

::div{.center}
![img](/content/wn2/pos.png){style="max-width: 100%"}
::

<br/>

Improvements stem from changing data selection order: previously, top 5% of players were selected first, then filters by tank and map were applied. If a skilled player hadn't used a certain tank, no data existed. Now, filters are applied first, then the top 5% of players within this filtered dataset are selected.
> Criteria loosen if insufficient data is available.

## Additional Improvements
Alongside major features, numerous refinements and improvements are included.

### Compatibility with Other Mods
New minimap functionality is fully compatible with other minimap mods, including `XVM`.

### Alternative Activation Method
Some users faced activation issues; the game couldn’t communicate with the activation server, causing the website to freeze at `waiting for client`.

Now, pressing the `activate` button while holding the `alt` key allows license key entry directly in-game, bypassing the activation site. Users with file-based licenses can also adopt this method.

<br/>

::div{.center}
![img](/content/wn2/alternativeActivation.png){style="max-height: 110px"}
::

### Server Unavailability Notification
You will now receive notifications when the server is unavailable, aiding in troubleshooting if welcome messages don’t appear in the garage.

<br/>

::div{.center}
![img](/content/wn2/notificationServerError.png){style="max-height: 200px"}
::

### Improved Protection System
License blocking no longer considers repeated requests coming **consecutively** from the **same map** and **same tank**, preventing erroneous blocks from duplicated ISP requests.

**Simultaneous play on the same license remains prohibited.**

<br/>

::div{.multi}
![img](/content/wn2/allow.png){style="max-height: 350px"}
![img](/content/wn2/disallow.png){style="max-height: 350px"}
::

### Mod Settings Adapted to Current Version
You can customize the mod’s functionality and display options according to your preferences.

<br/>

::div{.center}
![img](/content/wn2/settings.jpg){style="max-height: 550px"}
::
