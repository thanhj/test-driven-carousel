import React from 'react';
import { shallow, mount } from 'enzyme';
import Carousel, { Carousel as CoreCarousel } from '../Carousel';
import CarouselButton from '../CarouselButton';
import CarouselSlide from '../CarouselSlide';

describe('Carousel', () => {
  const slides = [
    {
      imgUrl: 'https://example.com/slide1.jpg',
      description: 'Slide 1',
      attrition: 'Uno Pizzeria',
    },
    {
      imgUrl: 'https://example.com/slide2.jpg',
      description: 'Slide 2',
      attrition: 'Dos Equis',
    },
    {
      imgUrl: 'https://example.com/slide3.jpg',
      description: 'Slide 3',
      attrition: 'Three Amigos',
    },
  ];

  describe('component with HOC', () => {
    // Tests against Carousel wil go here

    let mounted;

    beforeEach(() => {
      mounted = mount(<Carousel slides={slides} />);
    });

    it('allows `slideIndex` to be controlled', () => {
      mounted = mount(<Carousel slides={slides} slideIndex={1} />);
      expect(mounted.find(CoreCarousel).prop('slideIndex')).toBe(1);
      mounted.setProps({ slideIndex: 0 });
      expect(mounted.find(CoreCarousel).prop('slideIndex')).toBe(0);
    });

    it('sets slideIndex={0} on the core component', () => {
      expect(mounted.find(CoreCarousel).prop('slideIndex')).toBe(0);
    });

    it('passes `slides` down to the core component', () => {
      expect(mounted.find(CoreCarousel).prop('slides')).toBe(slides);
    });

    it('advances the slide after `autoAdvanceDelay` elapses', () => {
      jest.useFakeTimers();
      const autoAdvanceDelay = 10e3;
      mounted = mount(
        <Carousel slides={slides} autoAdvanceDelay={autoAdvanceDelay} />
      );
      jest.advanceTimersByTime(autoAdvanceDelay);
      mounted.update();
      expect(mounted.find(CoreCarousel).prop('slideIndex')).toBe(1);
    });
  });

  describe('core component', () => {
    // Tests against CoreCarousel will go here
    const slideIndexDecrement = jest.fn();
    const slideIndexIncrement = jest.fn();
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <CoreCarousel
          slides={slides}
          slideIndex={0}
          slideIndexDecrement={slideIndexDecrement}
          slideIndexIncrement={slideIndexIncrement}
        />
      );
    });

    it('rendrs a <div>', () => {
      expect(wrapper.type()).toBe('div');
    });

    it('renders a CarouselButton labeled "Prev"', () => {
      expect(
        wrapper
          .find(CarouselButton)
          .at(0)
          .prop('children')
      ).toBe('Prev');
    });

    it('redners a CarouselButton labeled "Next"', () => {
      expect(
        wrapper
          .find(CarouselButton)
          .at(1)
          .prop('children')
      ).toBe('Next');
    });

    it('renders the current slide as a CarouselSlide', () => {
      let slideProps;
      // Initial slide
      slideProps = wrapper.find(CarouselSlide).props();
      expect(slideProps).toEqual({
        ...CarouselSlide.defaultProps,
        ...slides[0],
      });
      // Slide 1
      wrapper.setProps({ slideIndex: 1 });
      slideProps = wrapper.find(CarouselSlide).props();
      expect(slideProps).toEqual({
        ...CarouselSlide.defaultProps,
        ...slides[1],
      });
    });

    it('decrements `slideIndex` when Prev is clicked', () => {
      wrapper.find('[data-action="prev"]').simulate('click');
      expect(slideIndexDecrement).toHaveBeenCalledWith(slides.length);
    });

    it('increases `slideIndex` when Next is clicked', () => {
      wrapper.find('[data-action="next"]').simulate('click');
      expect(slideIndexIncrement).toHaveBeenCalledWith(slides.length);
    });

    it('passes defaultImg and defaultImgHeight to the CarouselSlide', () => {
      const defaultImg = () => 'test';
      const defaultImgHeight = 1234;

      wrapper.setProps({ defaultImg, defaultImgHeight });
      expect(wrapper.find(CarouselSlide).prop('Img')).toBe(defaultImg);
      expect(wrapper.find(CarouselSlide).prop('imgHeight')).toBe(
        defaultImgHeight
      );
    });

    it('allows individual slides to override Img and imgHeight', () => {
      const Img = () => 'test';
      const imgHeight = 1234;

      wrapper.setProps({ slides: [{ ...slides[0], Img, imgHeight }] });
      expect(wrapper.find(CarouselSlide).prop('Img')).toBe(Img);
      expect(wrapper.find(CarouselSlide).prop('imgHeight')).toBe(imgHeight);
    });
  });
});
