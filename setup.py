from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in prac2/__init__.py
from prac2 import __version__ as version

setup(
	name="prac2",
	version=version,
	description="sadf",
	author="asd",
	author_email="ads",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
