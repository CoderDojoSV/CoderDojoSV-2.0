# Development

CoderDojoSV.com is written in the [Ruby][] programming language using the
[Ruby on Rails][Rails] web application framework. In order to add features or
fix bugs you will need to install Ruby version 2.0 or greater. Right now the
happy development path requires a Mac OS X, Linux, or BSD system but in the
future we hope to welcome our friends running Microsoft Windows as well.

The primary maintainer of CoderDojoSV.com is @iTweak0r.

## Prerequisite Dependencies

There are two pieces of software you need to install in advance. On Linux or
BSD these can be installed via your package manager. On Mac OS X they can be
installed via [Homebrew][]

- Ruby version 2.0 or greater
- PostgreSQL version 9.0 or greater
- A text editor such as [Brackets (recommended)][Brackets], [Sublime Text][], or
	any [other plain text editor][editor list].

## Getting Started

To start working, use Git to clone the repository:

		$ git clone https://github.com/CoderDojoSV/CoderDojoSV-2.0.git coderdojosv.com
		$ cd coderdojosv.com

Then run the provided bootstrap script to get everything set up. If the script
fails in any way. [Open an issue][issue] to get help.

Once the bootstrap script has run the first time, you'll need to configure
your local development environment using the `.env` file.

## Configuration

Open the `.env` file in your :pencil: text editor. It should contain the
following variables in the format

		export VARIABLE_NAME="variable value"

### `DATABASE_URL`: The url-formatted location of your database.

Format: postgres://*user name*:*passphrase*@*host name*/*database name*:*port*

- *user name*: the username of the database user Rails should connect as.
	Can be blank and usually is.
- *passphrase*: The database passphrase used to authenticate the user. Can be
	blank and usually is.
- *host name*: The host name of the computer running the database. Usually
	`localhost`.
- *database name*: The name of the database on the server. Usually
	`coderdojosv_development` for our purposes.
- *port*: The TCP port to use to connect to the database. Leave blank to use
	the PostgreSQL default.

Example: `postgres://psqlTony:secretMonkeyFace77@localhost/coderdojosv_development:11988`.

Suggested value: `postgres://localhost/coderdojosv_development`

## Problems

If you have any issues setting up, [open an issue][issue]! We'll help you out.

[Ruby]: http://ruby-lang.org
[Rails]: http://rubyonrails.org
[Homebrew]: http://brew.sh/
[issue]: https://github.com/CoderDojoSV/CoderDojoSV-2.0/issues/new
[Brackets]: http://brackets.io
[Sublime Text]: http://www.sublimetext.com/
[editor list]: https://en.wikipedia.org/wiki/List_of_text_editors#Free_software_2
