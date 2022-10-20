function getBadges() {
    const badges = new Map();
    badges.set(
        "Apache",
        {
            badgeUrl: "https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg",
            licenseUrl: "https://opensource.org/licenses/Apache-2.0"
        }
    );
    badges.set(
        "Boost",
        {
            badgeUrl: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
            licenseUrl: "https://www.boost.org/LICENSE_1_0.txt"
        }
    );
    badges.set(
        "BSD",
        {
            badgeUrl: "https://img.shields.io/badge/License-BSD_3--Clause-orange.svg",
            licenseUrl: "https://opensource.org/licenses/BSD-3-Clause"
        }
    );
    badges.set(
        "BSD 2-Clause License",
        {
            badgeUrl: "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
            licenseUrl: "https://opensource.org/licenses/BSD-2-Clause"
        }
    );
    badges.set(
        "Eclipse",
        {
            badgeUrl: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
            licenseUrl: "https://opensource.org/licenses/EPL-1.0"
        }
    );
    badges.set(
        "GNU",
        {
            badgeUrl: "https://img.shields.io/badge/License-GPLv3-blue.svg",
            licenseUrl: "https://www.gnu.org/licenses/gpl-3.0"
        }
    );
    badges.set(
        "GNU GPL v2",
        {
            badgeUrl: "https://img.shields.io/badge/License-GPL_v2-blue.svg",
            licenseUrl: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
        }
    );
    badges.set(
        "GNU AGPL v3",
        {
            badgeUrl: "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
            licenseUrl: "https://www.gnu.org/licenses/agpl-3.0"
        }
    );
    badges.set(
        "GNU LGPL v3",
        {
            badgeUrl: "https://img.shields.io/badge/License-LGPL_v3-blue.svg",
            licenseUrl: "https://www.gnu.org/licenses/lgpl-3.0"
        }
    );
    badges.set(
        "GNU FDL v1.3",
        {
            badgeUrl: "https://img.shields.io/badge/License-FDL_v1.3-blue.svg",
            licenseUrl: "https://www.gnu.org/licenses/fdl-1.3"
        }
    );
    badges.set(
        "The Hippocratic License 2.1",
        {
            badgeUrl: "https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg",
            licenseUrl: "https://firstdonoharm.dev"
        }
    );
    badges.set(
        "The Hippocratic License 3.0",
        {
            badgeUrl: "https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg",
            licenseUrl: "https://firstdonoharm.dev"
        }
    );
    badges.set(
        "IBM",
        {
            badgeUrl: "https://img.shields.io/badge/License-IPL_1.0-blue.svg",
            licenseUrl: "https://opensource.org/licenses/IPL-1.0"
        }
    );
    badges.set(
        "ISC",
        {
            badgeUrl: "https://img.shields.io/badge/License-ISC-blue.svg",
            licenseUrl: "https://opensource.org/licenses/ISC"
        }
    );
    badges.set(
        "MIT",
        {
            badgeUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
            licenseUrl: "https://opensource.org/licenses/MIT"
        }
    );
    badges.set(
        "Mozilla",
        {
            badgeUrl: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
            licenseUrl: "https://opensource.org/licenses/MPL-2.0"
        }
    );
    badges.set(
        "Open Data Commons",
        {
            badgeUrl: "https://img.shields.io/badge/License-ODC_BY-brightgreen.svg",
            licenseUrl: "https://opendatacommons.org/licenses/by/"
        }
    );
    badges.set(
        "Open Database License (ODbL)",
        {
            badgeUrl: "https://img.shields.io/badge/License-ODbL-brightgreen.svg",
            licenseUrl: "https://opendatacommons.org/licenses/odbl/"
        }
    );
    badges.set(
        "Public Domain Dedication and License (PDDL)",
        {
            badgeUrl: "https://img.shields.io/badge/License-PDDL-brightgreen.svg",
            licenseUrl: "https://opendatacommons.org/licenses/pddl/"
        }
    );
    badges.set(
        "The Perl License",
        {
            badgeUrl: "https://img.shields.io/badge/License-Perl-0298c3.svg",
            licenseUrl: "https://opensource.org/licenses/Artistic-2.0"
        }
    );
    badges.set(
        "The Artistic License 2.0",
        {
            badgeUrl: "https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg",
            licenseUrl: "https://opensource.org/licenses/Artistic-2.0"
        }
    );
    badges.set(
        "SIL",
        {
            badgeUrl: "https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg",
            licenseUrl: "https://opensource.org/licenses/OFL-1.1"
        }
    );
    badges.set(
        "Unlicense",
        {
            badgeUrl: "https://img.shields.io/badge/license-Unlicense-blue.svg",
            licenseUrl: "http://unlicense.org/"
        }
    );
    badges.set(
        "WTFPL",
        {
            badgeUrl: "https://img.shields.io/badge/License-WTFPL-brightgreen.svg",
            licenseUrl: "http://www.wtfpl.net/about/"
        }
    );
    badges.set(
        "Zlib",
        {
            badgeUrl: "https://img.shields.io/badge/License-Zlib-lightgrey.svg",
            licenseUrl: "https://opensource.org/licenses/Zlib"
        }
    );

    return badges;
}

function getLicense(license) {
    return getBadges().get(license);
}

module.exports = getLicense;
