---
sidebar_position: 0
---

# Next Release

Version: **Next release** <br />
Release date: **xx.xx.2024**

| File | `SHA256` |
| ---- | -------- |

**System requirements**

- Windows 10 / Server x64 (1809 or later)
- [.NET Desktop Runtime 8.0 (LTS) - x64](https://dotnet.microsoft.com/en-us/download/dotnet/8.0/runtime)

## Breaking Changes

- The binaries and the installer (`.msi`) are now signed with a free code signing certificate from [SignPath Foundation](https://signpath.org/). Thanks to [SignPath.io](https://signpath.io/) for providing free code signing for open source projects. [#2705](https://github.com/BornToBeRoot/NETworkManager/pull/2705)

- Installer has been changed from `InnoSetup` (`.exe`) to `WiX Toolset` (`.msi`) in order to support deep signing of the binaries. [#2705](https://github.com/BornToBeRoot/NETworkManager/pull/2705)

  :::info

  The MSI installer will attempt to automatically uninstall the previous version of NETworkManager.
  
  :::
  
## What's new?

## Improvements

- **General**
 
  - Improve ToolTip for the application view. [#2716](https://github.com/BornToBeRoot/NETworkManager/pull/2716)

- **WiFi**

  - Request WiFi access as described [here](https://learn.microsoft.com/en-us/windows/win32/nativewifi/wi-fi-access-location-changes) due to new Windows 11 requirements coming in fall 2024. [#2719](https://github.com/BornToBeRoot/NETworkManager/pull/2719)

## Bugfixes

- **WiFi**
  
  - Handle exception when accessing WiFi adapter is not possible. [#2719](https://github.com/BornToBeRoot/NETworkManager/pull/2719)

## Dependencies, Refactoring & Documentation

- Code cleanup & refactoring
  - ScrollViewer / ScrollBar [#2716](https://github.com/BornToBeRoot/NETworkManager/pull/2716)
- Language files updated via [#transifex](https://github.com/BornToBeRoot/NETworkManager/pulls?q=author%3Aapp%2Ftransifex-integration)
- Dependencies updated via [#dependabot](https://github.com/BornToBeRoot/NETworkManager/pulls?q=author%3Aapp%2Fdependabot)
